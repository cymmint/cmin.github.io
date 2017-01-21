<div class="copyright" >
  <div>
    <span class="with-love"><i class="fa fa-{{ theme.authoricon }}"></i></span>
    <span class="author" itemprop="copyrightHolder">{{ config.author }}</span>
    个人前端博客
  </div>
  {% set current = date(Date.now(), "YYYY") %}
  Copyright &copy; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  <span itemprop="copyrightYear">{{ current }}</span>
  <span>cmin.me</span>
</div>

{% if theme.copyright %}
<div class="powered-by">
  {{ __('footer.powered', '<a class="theme-link" href="https://hexo.io">Hexo</a>') }}
</div>

<div class="theme-info">
  {{ __('footer.theme') }} -
  <a class="theme-link" href="https://github.com/iissnan/hexo-theme-next">
    NexT.{{ theme.scheme }}
  </a>
</div>
{% endif %}
