from django.db import models

class Book(models.Model):
    name = models.CharField(max_length=350)
    book = models.FileField(upload_to='books')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
