from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^fib$', views.fib, name='fib'),
    url(r'^$', views.index, name='index'),
]
