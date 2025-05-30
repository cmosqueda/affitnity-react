# Generated by Django 5.2 on 2025-05-14 01:59

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('targets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='target',
            name='diet_goals',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=50, null=True), blank=True, default=list, size=None),
        ),
        migrations.AddField(
            model_name='target',
            name='diet_restrictions',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=50, null=True), blank=True, default=list, size=None),
        ),
    ]
