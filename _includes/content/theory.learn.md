##### Learn More

{% for item in site.data.learn.advanced %}* <i class="{{ item.icon }}"></i> [{{ item.name }}]({{item.link}}) {% if item.desc %}- {{ item.desc }}{% endif %}
{% endfor %}
