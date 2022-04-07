from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from blog.models import blog_category, blog_comments, blog_post


class User_serializer(ModelSerializer):
    class Meta:
        model=User
        fields=["id","username", "password", "first_name", "last_name", "email"]
        extra_kwargs={
            "password":{"write_only":True}
        }
    
    def create(self, validated_data):
        user=User.objects.create(
            username=validated_data["username"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            email=validated_data["email"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user
    def update(self, instance, validated_data):
        instance.username=validated_data["username"]
        instance.first_name=validated_data["first_name"]
        instance.last_name=validated_data["last_name"]
        instance.email=validated_data["email"]
        instance.set_password=validated_data["password"]
        instance.save()
        return instance


class blog_Post_serializer(ModelSerializer):
    class Meta:
        model=blog_post
        fields="__all__"

class blog_category_serializer(ModelSerializer):
    class Meta:
        model=blog_category
        fields="__all__"

class blog_comment_serializer(ModelSerializer):
    class Meta:
        model=blog_comments
        fields="__all__"