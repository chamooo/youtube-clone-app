import { Stack } from '@mui/system';

import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}>
            {categories.map((category, id) => (
                <button
                    onClick={() => setSelectedCategory(category.name)}
                    key={category.name}
                    className="category-btn"
                    style={{
                        background: category.name === selectedCategory && '#FC1503',
                        color: '#fefefe',
                    }}>
                    <span
                        style={{
                            color: category.name === selectedCategory ? '#fefefe' : '#FC1503',
                            transition: 'color .3s ease',
                            marginRight: '10px',
                        }}>
                        {category.icon}
                    </span>
                    <span
                        style={{
                            opacity: category.name === selectedCategory ? '1' : '.9',
                        }}>
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default Sidebar;
