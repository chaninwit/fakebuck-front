import Modal from "../../../conponents/Modal";

export default function RegisterContainer() {
  return (
    <div>
      <button className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-700 tracking-tighter">
        Create new account
      </button>
      <Modal />
    </div>
  );
}
