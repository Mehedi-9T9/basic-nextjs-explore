import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const actions = async () => {
    revalidatePath('/news')
    redirect('/blogs')
};

export default actions;