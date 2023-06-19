
const Application = () => {
  return (
    
    <section>
                            <div class="container my-3 mx-auto ">
                            <h4 class="mb-3 my-4 text-center">Apply For The Job</h4>
                            <form class="p-4">
                                <div class="row g-3">
                                    <div class="col-12 col-sm-4">
                                    <label for="" class="form-label">Your Name* </label>
                                        <input type="text" class="form-control" placeholder="Your Name"/>
                                    </div>
                                    <div class="col-12 col-sm-4">
                                    <label for="" class="form-label">NRC* </label>
                                        <input type="text" class="form-control" placeholder="NRC"/>
                                    </div>
                                    <div class="col-12 col-sm-4">
                                    <label for="" class="form-label">Date Of Birth* </label>
                                        <input type="date" class="form-control" />
                                    </div>
                                    <div class="col-12 col-sm-4">
                                    <label for="" class="form-label">Your Email* </label>
                                        <input type="email" class="form-control" placeholder="Your Email"/>
                                    </div>
                                    <div class="col-12 col-sm-4">
                                    <label for="" class="form-label">Your Phone Number* </label>
                                        <input type="phone" class="form-control" placeholder="Your Phone No"/>
                                    </div>
                                   
                                    <div class="col-12 col-sm-4">
                                        <input type="email" class="form-control" placeholder="Your Father Name"/>
                                    </div>
                                    <div class="col-12 col-sm-4">
                                        <input type="phone" class="form-control" placeholder="Gender"/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="phone" class="form-control" placeholder="Objective"/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="phone" class="form-control" placeholder="Address"/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control" placeholder="Portfolio Website"/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="file" class="form-control bg-white"/>
                                    </div>
                                    <div class="col-12">
                                        <textarea class="form-control" rows="5" placeholder="Coverletter"></textarea>
                                    </div>
                                    <div class="col-12 d-flex justify-content-end">
                                        <button class="btn btn-outline-primary w-25 " type="submit">Apply Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
    </section>
  )
}

export default Application