from django.db import models

# Create your models here.
class Emails(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return "{}, {}, {}, {}".format(self.name, self.message, self.email, self.date_time)