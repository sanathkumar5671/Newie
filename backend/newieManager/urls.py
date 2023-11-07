from django.urls import path
from newieManager import views

urlpatterns = [
    path("api/data/", views.api_data, name="api_data"),
]