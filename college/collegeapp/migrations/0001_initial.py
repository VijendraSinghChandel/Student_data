# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('college_Name', models.CharField(max_length=500)),
                ('street', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=500)),
                ('city', models.CharField(max_length=500)),
                ('contact_no', models.IntegerField(max_length=30)),
                ('branch', models.CharField(max_length=100)),
                ('college1', models.ForeignKey(to='collegeapp.College', null=True)),
            ],
        ),
    ]
