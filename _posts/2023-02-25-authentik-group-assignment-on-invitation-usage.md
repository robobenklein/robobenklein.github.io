---
layout: post
title: "Authentik group assignment on invitation usage"
date: 2023-02-25 # date of publish (sorting value)
created: 2023-02-25 # date of creation (shown value, defaults to `date`)
modified: 2023-02-25 # date last updated (shown if different than created)
categories: authentik
description:
tags: [authentik]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

For whatever reason I had trouble finding any resource describing how to add groups to a newly-invited user automatically.

This post will serve mostly as a reference to myself, as I want to try to get this added to the official docs instead since I thought this was a fairly common use case.



We'll start by outlining the flow as a whole:

<!-- BEGIN AUTHENTIK GENERATED SVG -->
{% include images/2023-02-25-flow.svg %}
<!-- END AUTHENTIK GENERATED SVG -->

# Custom additions

Given that we have the flow set up, we need to add a policy to convert the data from the invitation stage into the actual Authentik group objects, so I wrote an expression policy:

```python
from authentik.core.models import Group

if "prompt_data" not in request.context:
  ak_logger.warn(f"prompt_data not found in {request.context}")
  return True

if "groups_to_add" not in request.context["prompt_data"]:
  ak_logger.info(f"prompt_data does not have any groups to add")
  return True

add_groups = []
for invite_group_name in request.context["prompt_data"]["groups_to_add"]:
  group = Group.objects.get(name=invite_group_name)
  add_groups.append(group)
  ak_logger.info(f"added {invite_group_name} to user")

# ["groups"] *must* be set to an array of Group objects, names alone are not enough.
request.context["flow_plan"].context["groups"] = add_groups

return True
```

Then, in the invitation you can add group names to an array called `groups_to_add` in the `Attributes` input:

```yaml
groups_to_add:
  - My Awesome Group Name
```
> the same structure in json works as well, like `{"groups_to_add": ["Group Name"]}`

> Warning: you cannot use `groups` as the array key here because it will conflict with Authentik's expected array of `Group` objects. (*not* strings!) I spent a while learning this.

If a run of the policy fails (throws an exception) you should get an email from Authentik with the traceback. Most commonly this would be that you have the wrong group name in the invitation attributes.

Now we need to make sure this policy is executed at the right time during the flow, right before the user write stage:

Edit the Stage Binding to ensure `Evaluate on plan` is off, and `Re-evaluate policies` is enabled. This will evaluate the policy just before writing the user to storage with the new `groups` set by the policy.
