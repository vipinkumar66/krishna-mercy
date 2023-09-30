from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from .models import BlogModel


@receiver(post_delete, sender=BlogModel)
def send_delete_message(sender, *args, **kwargs):
    blog_instnace = kwargs['instance']
    print("The Blog was deleted", blog_instnace.title)

@receiver(post_save, sender=BlogModel)
def send_blogadded_message(sender, *args, **kwargs):
    blog_instnace = kwargs['instance']
    print(f"New blog added : {blog_instnace.title}")