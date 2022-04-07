from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from rest_framework.settings import api_settings
from .serializers import User_serializer, blog_category_serializer, blog_Post_serializer, blog_comment_serializer
from django.contrib.auth.models import User
from blog.models import blog_post, blog_category, blog_comments



class Login(ObtainAuthToken):
    renderer_classes=api_settings.DEFAULT_RENDERER_CLASSES

class Signup(ModelViewSet):
    serializer_class=User_serializer
    queryset=User.objects.filter(is_superuser=False, is_staff=False)


class Blogpost(ModelViewSet):
    http_method_names=["get"]
    serializer_class=blog_Post_serializer
    queryset=blog_post.objects.all()
    filter_backends=[filters.SearchFilter, filters.OrderingFilter]
    search_fields=("title",)
    ordering_fields=["id"]

class Blogcategory(ModelViewSet):
    serializer_class=blog_category_serializer
    queryset=blog_category.objects.all()

class Blogcomments(ModelViewSet):
    serializer_class=blog_comment_serializer
    queryset=blog_comments.objects.all()