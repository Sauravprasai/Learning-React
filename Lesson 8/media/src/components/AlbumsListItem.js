import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrash } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';

function AlbumsListItem({album}){
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleClick = () => {
        removeAlbum(album)
    }

    const header = <>
        <Button className='mr-2' loading={results.isLoading} onClick={handleClick}>
            <GoTrash/>
        </Button>
        {album.title}
    </>;

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of Photos in the album
        </ExpandablePanel>
    )
}

export default AlbumsListItem;