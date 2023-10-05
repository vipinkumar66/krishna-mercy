# Generated by Django 4.2.5 on 2023-10-05 13:17

import books.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='book',
            field=models.FileField(upload_to='books', validators=[books.models.validate_file_format]),
        ),
    ]