import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  category: string;
}

interface CertificatesSectionProps {
  certificates?: Certificate[];
}

const defaultCertificates: Certificate[] = [
  {
    id: "cert1",
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "June 2023",
    credentialUrl: "https://www.example.com/credential/123",
    category: "Data Science",
  },
  {
    id: "cert2",
    title: "Machine Learning Specialization",
    issuer: "Stanford University & Coursera",
    date: "August 2023",
    credentialUrl: "https://www.example.com/credential/456",
    category: "Machine Learning",
  },
  {
    id: "cert3",
    title: "SQL for Data Analysis",
    issuer: "DataCamp",
    date: "March 2023",
    credentialUrl: "https://www.example.com/credential/789",
    category: "Database",
  },
  {
    id: "cert4",
    title: "Python Programming",
    issuer: "Codecademy",
    date: "January 2023",
    category: "Programming",
  },
];

const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  certificates = defaultCertificates,
}) => {
  const [filter, setFilter] = React.useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(certificates.map((cert) => cert.category))),
  ];

  const filteredCertificates =
    filter === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === filter);

  return (
    <section
      id="certificates"
      className="py-16 px-4 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Certificates & Credentials
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my
            skills.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={filter === category ? "default" : "outline"}
              className="cursor-pointer text-sm py-1 px-3"
              onClick={() => setFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge className="mb-2">{certificate.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
                        {certificate.title}
                      </h3>
                      <div className="flex items-center text-slate-600 dark:text-slate-300 mb-4">
                        <Award className="h-4 w-4 mr-2" />
                        <span>{certificate.issuer}</span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Issued: {certificate.date}
                      </p>
                    </div>
                  </div>

                  {certificate.credentialUrl && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={certificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Credential
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Add Certificate Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full overflow-hidden border-dashed border-2 border-slate-300 dark:border-slate-600 bg-transparent flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-slate-700 dark:text-slate-300">
                  More Coming Soon
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Future certifications will appear here
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
