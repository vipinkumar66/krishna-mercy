import os
from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import Book

@receiver(post_delete, sender=Book)
def delete_respective_pdf(sender, *args, **kwargs):
    book_instance = kwargs["instance"]
    if os.path.isfile(book_instance.book.path):
        os.remove(book_instance.book.path)
        print(f"{book_instance.name} removed from system")
