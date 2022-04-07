from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.db import router
from . import views

router=DefaultRouter()

router.register("signup", views.Signup)
router.register("blog-post", views.Blogpost)
router.register("blog-category", views.Blogcategory)
router.register("blog-comments", views.Blogcomments)


urlpatterns = [
    path("login", views.Login.as_view()),
    path("", include(router.urls))
]
