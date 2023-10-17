import React, { useState, useEffect, FormEvent } from 'react';
import ButtonCreate from '../../components/ButtonCreate';
import Card from '../../components/Card';
import api from '../../services/api';
import Menu from '../../components/Menu';
import ImgChave from '../../assets/chave.jpg';

interface Keys {
  number: number;
  name: string;
}

const Keys: React.FC = () => {
  const [keys, setKeys] = useState<Keys[]>([]);

  // listando as chaves
  useEffect(() => {
    api.get('keys/').then((response) => {
      setKeys(response.data);
    });
  }, []);

  async function handleDeleteKey(_keyNumber: number) {
    try {
      await api.delete(`keys/${_keyNumber}/`);
      alert(`Chave ${_keyNumber} deletada com sucesso.`);
    } catch (error) {
      alert('Erro ao deletar chave, tente novamente.');
    }
  }

  function handleCreateReservation(event: FormEvent) {
    alert('msg');
  }

  return (
    <Menu>
      <div className='row m-5'>
        <main role='main' className='container'>
          <h1 className='mb-5'>Chaves</h1>

          {/* CHAVES */}
          <div className='row d-flex'>
            {keys.map((key) => (
              <Card key={key.number} image={ImgChave} data={key}>
                <ButtonCreate modal='Reservations' />
              </Card>
            ))}
          </div>

          <ButtonCreate modal='Keys' />
        </main>
      </div>
    </Menu>
  );
};

export default Keys;
