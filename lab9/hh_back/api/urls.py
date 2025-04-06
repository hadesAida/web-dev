from django.urls import path
from .views import (
    CompanyListAPIView,
    CompanyDetailAPIView,
    CompanyVacanciesAPIView,
    VacancyListAPIView,
    VacancyDetailAPIView,
    top_ten_vacancies,
)

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
]
