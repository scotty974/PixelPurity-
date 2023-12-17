export default function MailCard() {
  return (
    <div className="flex items-center gap-6 bg-cyan-50 py-4 px-6 rounded">
      <input type="checkbox" name="check" id="" />
      <div className="flex items-center gap-3">
        <img
          src="https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905"
          alt=""
          className="w-16 h-16 object-cover rounded-full "
        />
        <div className="flex flex-col justify-center">
          <div className="flex justify-between ">Fabien <span>5s</span></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            culpa,
          </p>
        </div>
      </div>
    </div>
  );
}
