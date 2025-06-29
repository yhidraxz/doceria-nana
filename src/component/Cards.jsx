export function Cards({ icon, title, description, buttonText, buttonAction }) {
  return (
    <div className="card bg-base-300 image-full shadow-sm">
      <figure>
        <img src={icon} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="opacity-70">{description}</p>

        {buttonText ? (
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={buttonAction}>
              {buttonText}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// <div className="card bg-base-100 image-full w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
