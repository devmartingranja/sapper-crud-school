import { writable, derived } from 'svelte/store';
import { Remove } from '@api/materias'

function CreateMateria() {

    const { subscribe, set, update } = writable({
        array: [],
        data: {}
    })

    return {
        subscribe,
        init: (data) => set(data),
        delete: async (id) => {
            await Remove(id)            
            update(m => {                
                m.array = m.array.filter(ma => ma.id !== id)
                return m
            })
        }
    }

}

export const materia = CreateMateria();