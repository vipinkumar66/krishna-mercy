import os
from django.db import models

class BlogModel(models.Model):
    title = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    image = models.ImageField(upload_to="blog", blank=True,default="blog/default.png")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

