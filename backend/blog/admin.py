from django.contrib import admin
from .models import blog_category, blog_comments, blog_post

class blog_category_admin(admin.ModelAdmin):
    list_display=["name", "status"]
    list_filter=("status",)
    search_fields=("name",)

admin.site.register(blog_category, blog_category_admin)

class blog_Post_admin(admin.ModelAdmin):
    list_display=["category", "title", "author", "date"]
    list_filter=["category"]
    search_fields=["title"]

admin.site.register(blog_post, blog_Post_admin)