# Generated by Django 4.2.3 on 2023-08-02 14:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0002_rename_created_by_project_creator_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='directory',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='project.directory'),
        ),
        migrations.AlterUniqueTogether(
            name='directory',
            unique_together={('name', 'project', 'parent')},
        ),
    ]
