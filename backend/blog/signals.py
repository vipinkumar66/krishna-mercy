from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from .models import BlogModel
import os

@receiver(post_delete, sender=BlogModel)
def delete_image(sender, *args, **kwargs):
    blog_instnace = kwargs['instance']
    if "default" in blog_instnace.image.path:
        pass
    else:
        if os.path.isfile(blog_instnace.image.path):
            os.remove(blog_instnace.image.path)
        print("The Blog was deleted and the image was also removed", blog_instnace.title)
    print(f"Blog post {blog_instnace.title} deleted")

@receiver(post_save, sender=BlogModel)
def send_blogadded_message(sender, *args, **kwargs):
    blog_instnace = kwargs['instance']
    print(f"New blog added : {blog_instnace.title}")