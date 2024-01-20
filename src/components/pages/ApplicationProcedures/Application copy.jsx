// BaşvuruSayfasi.jsx
import React, { useState } from 'react';
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    basvuruMetni: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Burada başvuru işlemini gerçekleştirme veya verileri başka bir yere gönderme işlemleri yapılabilir
    console.log('Başvuru Formu Gönderildi:', formData);
    // Örneğin, başka bir sayfaya yönlendirme yapılabilir
    navigate('/basvuru-sonuc');
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <Typography variant="h4" color="blue-gray" className="mb-4">
        Başvuru Formu
      </Typography>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          name="ad"
          value={formData.ad}
          onChange={handleChange}
          label="Ad"
        />
        <Input
          type="text"
          name="soyad"
          value={formData.soyad}
          onChange={handleChange}
          label="Soyad"
        />
      </div>
      <div className="mt-4">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="E-posta"
        />
      </div>
      <div className="mt-4">
        <Input
          type="textarea"
          name="basvuruMetni"
          value={formData.basvuruMetni}
          onChange={handleChange}
          label="Başvuru Metni"
        />
      </div>
      <div className="mt-6">
        <Button
          onClick={handleSubmit}
          color="indigo"
          size="lg"
          ripple="light"
        >
          Başvuru Gönder
        </Button>
      </div>
    </Card>
  );
};

export default Application;
