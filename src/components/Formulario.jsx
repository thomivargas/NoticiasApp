import useNoticias from '../hooks/useNoticias'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'


const categorias = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertainment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
                label='Categoría'
                value={categoria}
                onChange={handleChangeCategoria}
            >
                {categorias.map((categoria) => (
                    <MenuItem 
                        key={categoria.value} 
                        value={categoria.value}
                    >
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </form>
  )
}

export default Formulario
