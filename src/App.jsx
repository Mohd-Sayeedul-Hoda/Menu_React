import { useState } from 'react';
import Menu from './Menu';
import menu from './data';
import Title from './Title';
import Category from './Category';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
const App = () => {
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);
	const filterMethod = (category) => {
		if (category === 'all') {
			setMenuItems(menu);
			return;
		}
		const filterItem = menu.filter((item) => item.category === category);
		setMenuItems(filterItem);
	};
	return (
		<main>
			<section className="menu">
				<Title text="Menu" />
				<Category
					categories={categories}
					filterMethod={filterMethod}
				/>
				<Menu items={menuItems} />
			</section>
		</main>
	);
};
export default App;
