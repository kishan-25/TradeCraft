from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes,name="getRoutes"),
    path('api/products/',views.getProducts,name="getallProduct"),
    path('products/<str:pk>/',views.getProduct,name="getProduct"),
]  