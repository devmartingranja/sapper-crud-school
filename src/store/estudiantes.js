import { writable, derived } from 'svelte/store';
import { Create, Update, Remove } from '@api/estudiantes'

function CreateStore() {

    const { subscribe, set, update } = writable({
        array: []      
    })

    return {
        subscribe,
        init: (data) => set(data),
        create: async (data) => {
            const res = await Create(data)
            data.id = res.data.id
            update(m => {
                m.array.push(data)
                return m
            })
            return res
        },
        update: async (data) => {
            const res = await Update(data)
            update(m => {
                m.array = m.array.map(m => (m.id === data.id ? data : m))
                return m
            })
            return res
        },
        delete: async (id) => {
            const res = await Remove(id)
            update(m => {
                m.array = m.array.filter(ma => ma.id !== id)
                return m
            })
            return res
        }
    }
}

export const estudianteStore = CreateStore();