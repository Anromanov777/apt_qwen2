"""
WSGI config for rolls_pizza project.
"""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rolls_pizza.settings')
application = get_wsgi_application()
