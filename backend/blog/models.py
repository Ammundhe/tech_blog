from django.db import models
from django.contrib.auth.models import User

class blog_category(models.Model):
    name=models.CharField(max_length=255)
    status=models.BooleanField(default=True)

    def __str__(self) -> str:
        return str(self.name)


class blog_post(models.Model):
    category=models.ForeignKey(blog_category, on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    description=models.TextField()
    image=models.ImageField()
    author=models.ForeignKey(User, on_delete=models.CASCADE)
    date=models.DateField()

    def __str__(self) -> str:
        return str(self.title)

class blog_comments(models.Model):
    post=models.ForeignKey(blog_post, on_delete=models.CASCADE)
    name=models.CharField(max_length=255)
    email=models.EmailField()
    comment=models.TextField()
    date=models.DateField()

    def __str__(self) -> str:
        return str(self.name)
