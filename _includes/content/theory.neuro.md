##### Neuroscience and Computing

{% for item in site.data.learn.overview %}* <i class="{{ item.icon }}"></i> [{{ item.name }}]({{item.link}}) {% if item.desc %}- {{ item.desc }}{% endif %}
{% endfor %}
