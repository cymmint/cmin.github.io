{% if (theme.duoshuo and theme.duoshuo.shortname) or theme.duoshuo_shortname %}

  {% if theme.duoshuo %}
    {% set duoshuo_shortname = theme.duoshuo.shortname %}
  {% else %}
    {% set duoshuo_shortname = theme.duoshuo_shortname %}
  {% endif %}

  <script type="text/javascript">var duoshuoQuery={short_name:"{{ duoshuo_shortname }}"};(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.id="duoshuo-script";a.src=(document.location.protocol=="https:"?"https:":"http:")+"//ok4k2lt9z.bkt.clouddn.com/qn-embed.js?v=1.0";a.charset="UTF-8";(document.getElementById("footer")||document.getElementsByTagName("body")[0]).appendChild(a)})();</script>

  {% if theme.duoshuo_info.ua_enable %}
    {% if theme.duoshuo_info.admin_enable %}
      {% set ua_parser_internal = url_for(theme.vendors._internal) + '/ua-parser-js/dist/ua-parser.min.js?v=0.7.9' %}
      <script src="{{ theme.vendors.ua_parser | default(ua_parser_internal) }}"></script>
      <script src="{{ url_for(theme.js) }}/src/hook-duoshuo.js?v={{ theme.version }}"></script>
    {% endif %}
    {% set ua_parser_internal = url_for(theme.vendors._internal) + '/ua-parser-js/dist/ua-parser.min.js?v=0.7.9' %}
    <script src="{{ theme.vendors.ua_parser | default(ua_parser_internal) }}"></script>
    <script src="{{ url_for(theme.js) }}/src/hook-duoshuo.js"></script>
  {% endif %}

{% endif %}
