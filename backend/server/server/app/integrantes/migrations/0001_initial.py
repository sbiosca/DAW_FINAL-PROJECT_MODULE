# Generated by Django 4.1.7 on 2023-03-29 17:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('jugadores', '0001_initial'),
        ('tecnicos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Integrantes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='name')),
                ('apellidos', models.CharField(max_length=50, verbose_name='apellidos')),
                ('nacionalidad', models.CharField(max_length=50, verbose_name='nacionalidad')),
                ('fech_naci', models.DateField(verbose_name='fech_naci')),
                ('avatar', models.CharField(max_length=100, verbose_name='avatar')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='id_player', to='jugadores.jugadores')),
                ('tecnico', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='id_tecn', to='tecnicos.tecnicos')),
            ],
            options={
                'db_table': 'integrantes',
            },
        ),
    ]
