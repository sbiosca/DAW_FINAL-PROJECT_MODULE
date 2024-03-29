# Generated by Django 4.1.7 on 2023-03-29 17:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('entradas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Entrada_reserved',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entrada', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='id_entrada', to='entradas.entrada')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='id_user', to='users.users')),
            ],
            options={
                'db_table': 'entrada_reserved',
            },
        ),
    ]
