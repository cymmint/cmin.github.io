{# 多说热评文章 #}
{% if (theme.duoshuo_hotartical and page.title) %}
  <h3 style="padding-top:20px; border-top:1px solid rgba(0,0,0,0.13);">热评文章</h3>
  <div class="ds-top-threads" data-range="weekly" data-num-items="4"></div>
{% endif %}
