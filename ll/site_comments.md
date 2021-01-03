---
layout: page
title: "site comments"
comments: false
share: false
---

<div class="remark42__last-comments" data-max="50"></div>

<script>
  var remark_config = {
    host: "https://remark42.unhexium.net",
    site_id: 'Unhexium',
    components: ['last-comments'],
    theme: unhexium_dark_mode ? 'dark' : 'light',
    locale: 'en',
    show_email_subscription: false
  };

function load_s_a_comments() {
  (function(c) {
    for(var i = 0; i < c.length; i++){
      var d = document, s = d.createElement('script');
      s.src = remark_config.host + '/web/' +c[i] +'.js';
      s.defer = true;
      (d.head || d.body).appendChild(s);
    }
  })(remark_config.components || ['embed']);
}
addLoadEvent(load_s_a_comments);
</script>
