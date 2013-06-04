---
layout: frontpage
---
{% include JB/setup %}

{% for post in site.posts limit:10 %}
<div class="page-header" style="broder-bottom: 1px solid white; border-top:1px solid white;">
  <a href="{{ post.url }}" style="color:white"><h1>{{ post.title }}</h1></a>
  {{ post.date | date: "%B %d, %Y" }}
</div>

<div class="row" style="margin-bottom:30px">
  <div class="span10">
    {{ post.content }}
  </div>
</div> 
{% endfor %}
<a href="/pages/posts.html#10" style="text-decoration:none">
<div style="color:white; padding:10px; width: 120px; border:1px solid white; background-color: grey;">
&lt;&lt; Previous Posts
</div></a>
