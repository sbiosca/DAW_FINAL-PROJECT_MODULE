# Generated by Django 4.1.7 on 2023-03-29 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
                ('type', models.CharField(max_length=100, verbose_name='type')),
                ('talla', models.CharField(max_length=50, verbose_name='talla')),
                ('img', models.CharField(max_length=50, verbose_name='img')),
            ],
            options={
                'db_table': 'productos',
            },
        ),
    ]
