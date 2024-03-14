import React from 'react'

const Category = () => {
  return (
    <>
      <section className="mt-5">
        <h2 className="ml-3">Category</h2>
        <p className="ml-3">What are you currently looking for?</p>
        <div className="category mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../../assets/img/category-pants.png")}
                  alt="pants"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../../assets/img/category-jacket.png")}
                  alt="jacket"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../../assets/img/category-shorts.png")}
                  alt="shorts"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-3 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../../assets/img/category-t-shirt.png")}
                  alt="t-shirt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
