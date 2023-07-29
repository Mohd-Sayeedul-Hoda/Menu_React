const Category = ({ categories, filterMethod }) => {
	return (
		<div className="btn-container">
			{categories.map((category) => {
				return (
					<button
						type="button"
						className="btn"
						key={category}
						onClick={() => filterMethod(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};
export default Category;
