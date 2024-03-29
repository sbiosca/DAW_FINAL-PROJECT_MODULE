# Generated by Django 4.1.7 on 2023-03-29 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Equipo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
                ('city', models.CharField(max_length=100, verbose_name='city')),
                ('stadium', models.CharField(max_length=100, verbose_name='stadium')),
                ('shield', models.CharField(max_length=500, verbose_name='shield')),
                ('lat', models.CharField(max_length=100, verbose_name='lat')),
                ('long', models.CharField(max_length=100, verbose_name='long')),
            ],
            options={
                'db_table': 'equipo',
            },
        ),
    ]
