import '../style.css';

const contact = () => {
  const conBody = `
  <div class="tab-pane fade p-4" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <form id="contact-form">
      <div class="d-flex">
        <div class="labels mr-2">
          <div>Your Request: </div>
          <div class="mt-3">Email here: </div>
        </div>
        <div class="entries">
          <input type="text" id="request-box">
          <input type="email" id="email-box" class="mt-2">
        </div>
      </div>
      <button type="submit" class="mt-3 btn btn-primary">Submit</button>
    </form>
</div>
</div>`;
  return conBody;
};

export default contact;