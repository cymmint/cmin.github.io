{% if theme.leancloud_visitors.enable %}

  {# custom analytics part create by xiamo #}
  <script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js"></script>
  <script>AV.initialize("{{theme.leancloud_visitors.app_id}}", "{{theme.leancloud_visitors.app_key}}");</script>
  <script src="/lib/leancloud/index.js?v={{ theme.version }}"></script>

{% endif %}
