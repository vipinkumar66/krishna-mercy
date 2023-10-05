from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_file_format(value):
    if not value.name.endswith('.pdf'):
        raise ValidationError(_('Only pdf Files are allowed! '))

    if value.file.read(4) != b"%PDF":
        raise ValidationError(_("Only Pdf Files are allowed"))

class Book(models.Model):
    name = models.CharField(max_length=350)
    slug = models.SlugField(unique=True)
    book = models.FileField(upload_to='books', validators=[validate_file_format])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
