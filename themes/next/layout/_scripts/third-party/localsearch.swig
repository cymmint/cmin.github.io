{% if config.search.path %}
  <script>var search_path = "{{ config.search.path }}", path = "{{ config.root }}" + search_path;</script>
  <script src="/lib/search/index.js?v={{ theme.version }}"></script>
{% endif %}
