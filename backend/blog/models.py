from django.db import models
from django.db.models.signals import pre_delete, post_delete
from django.dispatch import receiver


class BlogModel(models.Model):
    title = models.CharField(max_length=300)
    content = models.TextField()
    image = models.ImageField(upload_to="blog", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

@receiver(pre_delete, sender=BlogModel)
def print_before_delete(sender,*args,**kwargs):
    print(kwargs)
    print("The model is saved")

pre_delete.connect(print_before_delete, sender=BlogModel)

@receiver(post_delete, sender=BlogModel)
def print_after_delete(sender,*args,**kwargs):
    print(kwargs)
    print("The model is saved")


post_delete.connect(print_after_delete, sender=BlogModel)